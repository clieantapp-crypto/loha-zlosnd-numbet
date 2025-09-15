

export const playNotificationSound = () => {
    const audio=new Audio('/doo_doo_doo (mp3cut.net).mp3')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };
