

export const playNotificationSound = () => {
    const audio=new Audio('/new-notification-017-352293.mp3')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };
