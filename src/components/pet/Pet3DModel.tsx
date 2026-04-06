'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Pet3DModelProps {
  position: [number, number, number];
  targetPosition?: [number, number, number];
  animation: 'idle' | 'walk' | 'eat' | 'play' | 'sleep';
  color?: string;
  onClick?: () => void;
}

// 使用基本几何体创建简化的3D猫
export default function Pet3DModel({ 
  position, 
  targetPosition,
  animation,
  color = '#FFA500',
  onClick 
}: Pet3DModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [bounceTime, setBounceTime] = useState(0);

  // 每帧更新动画
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // 移动到目标位置
    if (targetPosition) {
      const target = new THREE.Vector3(...targetPosition);
      groupRef.current.position.lerp(target, 0.05);
      
      // 朝向移动方向
      const direction = target.clone().sub(groupRef.current.position);
      if (direction.length() > 0.1) {
        const angle = Math.atan2(direction.x, direction.z);
        groupRef.current.rotation.y = angle;
      }
    }

    // 动画效果
    const time = state.clock.getElapsedTime();
    
    switch (animation) {
      case 'idle':
        //  idle 动画 - 轻微上下弹跳
        groupRef.current.position.y = position[1] + Math.sin(time * 2) * 0.1;
        break;
        
      case 'walk':
        // 走路动画 - 左右摇摆
        groupRef.current.position.y = position[1] + Math.abs(Math.sin(time * 5)) * 0.15;
        groupRef.current.rotation.z = Math.sin(time * 5) * 0.1;
        break;
        
      case 'eat':
        // 吃东西动画 - 点头
        groupRef.current.rotation.x = Math.sin(time * 3) * 0.2;
        break;
        
      case 'play':
        // 玩耍动画 - 跳跃
        groupRef.current.position.y = position[1] + Math.abs(Math.sin(time * 4)) * 0.3;
        groupRef.current.rotation.y += delta * 2;
        break;
        
      case 'sleep':
        // 睡觉动画 - 呼吸
        groupRef.current.scale.y = 1 + Math.sin(time * 1.5) * 0.05;
        groupRef.current.scale.x = 1 + Math.sin(time * 1.5) * 0.02;
        break;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onClick={onClick}
    >
      {/* 身体 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* 头部 */}
      <mesh position={[0, 1.1, 0.4]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* 左耳 */}
      <mesh position={[-0.2, 1.4, 0.4]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.12, 0.25, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* 右耳 */}
      <mesh position={[0.2, 1.4, 0.4]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.12, 0.25, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* 左眼 */}
      <mesh position={[-0.12, 1.15, 0.7]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* 右眼 */}
      <mesh position={[0.12, 1.15, 0.7]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* 鼻子 */}
      <mesh position={[0, 1.05, 0.72]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#FF69B4" />
      </mesh>

      {/* 尾巴 */}
      <mesh position={[0, 0.6, -0.6]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.05, 0.5, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* 左前腿 */}
      <mesh position={[-0.2, 0.15, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* 右前腿 */}
      <mesh position={[0.2, 0.15, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* 左后腿 */}
      <mesh position={[-0.2, 0.15, -0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* 右后腿 */}
      <mesh position={[0.2, 0.15, -0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* 阴影 */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.6, 16]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}
