// 语音合成工具 - 小猫声线

interface SpeechOptions {
  rate?: number;      // 语速 0.1 - 10
  pitch?: number;     // 音调 0 - 2
  volume?: number;    // 音量 0 - 1
  lang?: string;      // 语言
}

// 小猫声线配置 - 超级可爱
const catVoiceConfig: SpeechOptions = {
  rate: 1.05,       // 更慢的语速,更软萌
  pitch: 1.9,       // 更高的音调,像小奶猫
  volume: 1.0,
  lang: 'zh-CN',
};

// 小狗声线配置 - 活泼可爱
const dogVoiceConfig: SpeechOptions = {
  rate: 1.2,        // 稍快的语速,显得兴奋活泼
  pitch: 1.6,       // 较高音调,像小狗叫
  volume: 1.0,
  lang: 'zh-CN',
};

// 正常声线配置
const normalVoiceConfig: SpeechOptions = {
  rate: 1.0,
  pitch: 1.0,
  volume: 1.0,
  lang: 'zh-CN',
};

/**
 * 文字转语音（使用Web Speech API）
 * @param text 要朗读的文字
 * @param voiceType 声音类型：'cat' | 'dog' | 'normal'
 * @returns Promise<void>
 */
export function speak(text: string, voiceType: 'cat' | 'dog' | 'normal' = 'normal'): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!window.speechSynthesis) {
      reject(new Error('浏览器不支持语音合成'));
      return;
    }

    // 停止之前的语音
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // 根据类型选择配置
    const config = voiceType === 'cat' ? catVoiceConfig 
      : voiceType === 'dog' ? dogVoiceConfig 
      : normalVoiceConfig;

    utterance.rate = config.rate || 1.0;
    utterance.pitch = config.pitch || 1.0;
    utterance.volume = config.volume || 1.0;
    utterance.lang = config.lang || 'zh-CN';

    // 尝试选择最可爱、最柔软的中文女声
    const voices = window.speechSynthesis.getVoices();
    
    // 优先级: Microsoft Xiaoxiao(微软晓晓,最可爱) > Google中文女声 > 其他中文女声
    const chineseFemaleVoice = voices.find(voice => 
      voice.lang.startsWith('zh') && voice.name.includes('Xiaoxiao') // 微软晓晓 - 超可爱
    ) || voices.find(voice => 
      voice.lang.startsWith('zh') && voice.name.includes('Microsoft') && voice.name.includes('Female')
    ) || voices.find(voice => 
      voice.lang.startsWith('zh') && voice.name.includes('Google') && (voice.name.includes('Female') || voice.name.includes('女'))
    ) || voices.find(voice => 
      voice.lang.startsWith('zh') && (voice.name.includes('Female') || voice.name.includes('女') || voice.name.includes('Ting'))
    ) || voices.find(voice => 
      voice.lang.startsWith('zh-CN') && voice.name.includes('Microsoft')
    ) || voices.find(voice => 
      voice.lang.startsWith('zh-CN')
    ) || voices.find(voice => 
      voice.lang.startsWith('zh')
    );

    if (chineseFemaleVoice) {
      utterance.voice = chineseFemaleVoice;
    }

    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (error) => {
      reject(error);
    };

    // 清理文字中的markdown格式和特殊符号
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, '$1')  // 移除加粗
      .replace(/\*(.*?)\*/g, '$1')      // 移除斜体
      .replace(/```[\s\S]*?```/g, '')   // 移除代码块
      .replace(/`(.*?)`/g, '$1')        // 移除行内代码
      .replace(/#[\s]*/g, '')           // 移除标题符号
      .replace(/[-*+]\s/g, '')          // 移除列表符号
      .replace(/\n+/g, ' ')             // 换行符替换为空格
      .trim();

    // 可爱的语气词前缀
    if (voiceType === 'cat' && cleanText.length > 0) {
      // 小奶猫的声音,更软萌
      const catSounds = ['喵~', '喵呜~', '咪呜~'];
      const randomSound = catSounds[Math.floor(Math.random() * catSounds.length)];
      utterance.text = randomSound + ' ' + cleanText;
    } else if (voiceType === 'dog' && cleanText.length > 0) {
      // 小狗的声音,活泼
      const dogSounds = ['汪~', '汪汪~', '呜汪~'];
      const randomSound = dogSounds[Math.floor(Math.random() * dogSounds.length)];
      utterance.text = randomSound + ' ' + cleanText;
    } else {
      utterance.text = cleanText;
    }

    window.speechSynthesis.speak(utterance);
  });
}

/**
 * 停止当前语音
 */
export function stopSpeaking(): void {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

/**
 * 检查浏览器是否支持语音合成
 */
export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

/**
 * 获取可用的语音列表
 */
export function getAvailableVoices(): SpeechSynthesisVoice[] {
  return window.speechSynthesis.getVoices();
}

/**
 * 加载语音列表（某些浏览器需要）
 */
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    let voices = window.speechSynthesis.getVoices();
    
    if (voices.length > 0) {
      resolve(voices);
      return;
    }

    // 某些浏览器需要等待voiceschanged事件
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      resolve(voices);
    };

    // 超时保护
    setTimeout(() => {
      resolve(window.speechSynthesis.getVoices());
    }, 1000);
  });
}
