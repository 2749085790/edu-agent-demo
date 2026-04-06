'use client';

import { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import Pet3DModel from '../pet/Pet3DModel';
import { mockManor } from '@/data/manor';
import { mockPet3D, getPetStatusText } from '@/data/pets-3d';
import { mockInventory, getItemQuantity } from '@/data/inventory';
import { cropTemplates, createCrop, getCropProgress, getCropStageIcon } from '@/data/crops';
import { PlantPlot } from '@/types';

interface ManorSceneProps {
  onPlotClick?: (plotId: string) => void;
  onPetClick?: () => void;
}

// 种植地块组件
function Plot({ plot, onClick }: { plot: PlantPlot; onClick: () => void }) {
  const isPlanted = !!plot.crop;
  const progress = plot.crop ? getCropProgress(plot.crop) : 0;
  const icon = plot.crop ? getCropStageIcon(plot.crop) : '';

  return (
    <group position={[plot.position.x, 0, plot.position.y]}>
      {/* 地块背景 */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        onClick={onClick}
      >
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial 
          color={plot.isUnlocked ? (isPlanted ? '#8B4513' : '#D2691E') : '#808080'}
          roughness={0.9}
        />
      </mesh>

      {/* 作物显示 */}
      {isPlanted && plot.crop && (
        <>
          <Text
            position={[0, 0.5, 0]}
            fontSize={0.8}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {icon}
          </Text>
          
          {/* 进度条 */}
          <mesh position={[0, 0.02, 1.3]}>
            <planeGeometry args={[2, 0.15]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
          <mesh position={[-(1 - progress / 100), 0.02, 1.3]}>
            <planeGeometry args={[2 * (progress / 100), 0.15]} />
            <meshBasicMaterial color="#4CAF50" />
          </mesh>
        </>
      )}

      {/* 未解锁标记 */}
      {!plot.isUnlocked && (
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.5}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          🔒
        </Text>
      )}
    </group>
  );
}

// 宠物屋组件
function PetHouse() {
  return (
    <group position={[-6, 0, -6]}>
      {/* 屋子主体 */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>

      {/* 屋顶 */}
      <mesh position={[0, 2.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[3.5, 0.3, 3.5]} />
        <meshStandardMaterial color="#CD5C5C" />
      </mesh>

      {/* 门 */}
      <mesh position={[0, 0.6, 1.51]}>
        <planeGeometry args={[0.8, 1.2]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* 标签 */}
      <Text
        position={[0, 3.2, 0]}
        fontSize={0.5}
        color="#8B4513"
        anchorX="center"
        anchorY="middle"
      >
        🏠 宠物屋
      </Text>
    </group>
  );
}

// 装饰树组件
function DecorativeTree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* 树干 */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 3, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* 树冠 */}
      <mesh position={[0, 3.5, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
}

export default function ManorScene({ onPlotClick, onPetClick }: ManorSceneProps) {
  const [petPosition, setPetPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [petAnimation, setPetAnimation] = useState<'idle' | 'walk' | 'eat' | 'play' | 'sleep'>('idle');
  const [targetPos, setTargetPos] = useState<[number, number, number] | undefined>(undefined);

  // 点击地面移动宠物
  const handleGroundClick = useCallback((event: any) => {
    event.stopPropagation();
    const point = event.point;
    setTargetPos([point.x, 0, point.z]);
    setPetAnimation('walk');
    
    // 到达后切换为idle
    setTimeout(() => {
      setPetAnimation('idle');
    }, 2000);
  }, []);

  // 点击地块
  const handlePlotClick = useCallback((plotId: string) => {
    if (onPlotClick) {
      onPlotClick(plotId);
    }
  }, [onPlotClick]);

  return (
    <Canvas camera={{ position: [0, 12, 12], fov: 50 }}>
      {/* 光照 */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />

      {/* 环境 */}
      <Environment preset="sunset" />

      {/* 庄园地面 */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.01, 0]}
        onClick={handleGroundClick}
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#90EE90" roughness={0.8} />
      </mesh>

      {/* 网格辅助线 */}
      <group position={[0, 0.01, 0]}>
        <gridHelper args={[20, 20, '#000000', '#000000']} />
      </group>

      {/* 宠物屋 */}
      <PetHouse />

      {/* 装饰树 */}
      <DecorativeTree position={[-8, 0, -8]} />
      <DecorativeTree position={[8, 0, -8]} />
      <DecorativeTree position={[-8, 0, 8]} />

      {/* 种植地块 */}
      {mockManor.plots.map((plot) => (
        <Plot 
          key={plot.id} 
          plot={plot} 
          onClick={() => handlePlotClick(plot.id)}
        />
      ))}

      {/* 3D宠物 */}
      <Pet3DModel 
        position={petPosition}
        targetPosition={targetPos}
        animation={petAnimation}
        color="#FFA500"
        onClick={onPetClick}
      />

      {/* 相机控制 */}
      <OrbitControls 
        enablePan={true}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={5}
        maxDistance={20}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}
