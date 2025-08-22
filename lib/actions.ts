

export const playNotificationSound = () => {
    const audio=new Audio('/notification-off-269282.mp3')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };
