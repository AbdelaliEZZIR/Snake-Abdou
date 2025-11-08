export interface Theme {
  name: 'green' | 'purple' | 'blue' | 'red';
  colors: {
    background: string;
    header: string;
    boardContainerBg: string;
    boardLight: string;
    boardDark: string;
    border: string;
    text: string;
    overlayBg: string;
    overlayText: string;
    overlayTitle: string;
    buttonBg: string;
    buttonText: string;
    speedButtonBg: string;
    speedButtonText: string;
    speedButtonSelectedBg: string;
    speedButtonSelectedText: string;
    speedButtonSelectedRing: string;
    mobileControlsBg: string;
    mobileControlsIcon: string;
  };
}

export const themes: Theme[] = [
  {
    name: 'green',
    colors: {
      background: 'bg-[#3A6321]',
      header: 'bg-[#4A752C]',
      boardContainerBg: 'bg-[#AAD751]',
      boardLight: 'bg-[#AAD751]',
      boardDark: 'bg-[#A2D149]',
      border: 'border-[#2F4D20]',
      text: 'text-white',
      overlayBg: 'bg-green-900/80',
      overlayTitle: 'text-white',
      overlayText: 'text-gray-200',
      buttonBg: 'bg-yellow-400 hover:bg-yellow-300',
      buttonText: 'text-green-900',
      speedButtonBg: 'bg-green-700 hover:bg-green-600',
      speedButtonText: 'text-white',
      speedButtonSelectedBg: 'bg-yellow-400',
      speedButtonSelectedText: 'text-green-900',
      speedButtonSelectedRing: 'ring-yellow-200',
      mobileControlsBg: 'bg-green-900/50',
      mobileControlsIcon: 'text-yellow-200/80',
    }
  },
  {
    name: 'purple',
    colors: {
      background: 'bg-[#211F30]',
      header: 'bg-[#2C2842]',
      boardContainerBg: 'bg-[#4A4368]',
      boardLight: 'bg-[#4A4368]',
      boardDark: 'bg-[#423D5D]',
      border: 'border-[#161420]',
      text: 'text-white',
      overlayBg: 'bg-indigo-950/80',
      overlayTitle: 'text-white',
      overlayText: 'text-gray-300',
      buttonBg: 'bg-teal-400 hover:bg-teal-300',
      buttonText: 'text-indigo-900',
      speedButtonBg: 'bg-indigo-600 hover:bg-indigo-500',
      speedButtonText: 'text-white',
      speedButtonSelectedBg: 'bg-teal-400',
      speedButtonSelectedText: 'text-indigo-900',
      speedButtonSelectedRing: 'ring-teal-200',
      mobileControlsBg: 'bg-indigo-950/50',
      mobileControlsIcon: 'text-teal-200/80',
    }
  },
  {
    name: 'blue',
    colors: {
      background: 'bg-[#3D494E]',
      header: 'bg-[#556870]',
      boardContainerBg: 'bg-[#B6C8D1]',
      boardLight: 'bg-[#B6C8D1]',
      boardDark: 'bg-[#A9BDC8]',
      border: 'border-[#3D494E]',
      text: 'text-white',
      overlayBg: 'bg-slate-800/80',
      overlayTitle: 'text-white',
      overlayText: 'text-gray-300',
      buttonBg: 'bg-cyan-400 hover:bg-cyan-300',
      buttonText: 'text-slate-900',
      speedButtonBg: 'bg-slate-600 hover:bg-slate-500',
      speedButtonText: 'text-white',
      speedButtonSelectedBg: 'bg-cyan-400',
      speedButtonSelectedText: 'text-slate-900',
      speedButtonSelectedRing: 'ring-cyan-200',
      mobileControlsBg: 'bg-slate-800/50',
      mobileControlsIcon: 'text-cyan-200/80',
    }
  },
  {
    name: 'red',
    colors: {
      background: 'bg-[#5A2727]',
      header: 'bg-[#783434]',
      boardContainerBg: 'bg-[#B85C5C]',
      boardLight: 'bg-[#B85C5C]',
      boardDark: 'bg-[#AC5454]',
      border: 'border-[#5A2727]',
      text: 'text-white',
      overlayBg: 'bg-red-950/80',
      overlayTitle: 'text-white',
      overlayText: 'text-gray-300',
      buttonBg: 'bg-orange-400 hover:bg-orange-300',
      buttonText: 'text-red-900',
      speedButtonBg: 'bg-red-800 hover:bg-red-700',
      speedButtonText: 'text-white',
      speedButtonSelectedBg: 'bg-orange-400',
      speedButtonSelectedText: 'text-red-900',
      speedButtonSelectedRing: 'ring-orange-200',
      mobileControlsBg: 'bg-red-950/50',
      mobileControlsIcon: 'text-orange-200/80',
    }
  }
];