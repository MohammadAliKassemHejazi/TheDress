import { createContext, useState ,useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
    
  const [activeNotification, setactiveNotification] = useState();

    useEffect(() => {
      if (activeNotification) {
        const timer = setTimeout(() => {
          setactiveNotification(null);
        }, 3000);

        return () => {
          clearTimeout(timer);
        };
      }
    }, [activeNotification]);
    
    
  function showNotificationHandler(notificationData) {
    setactiveNotification(notificationData);
  }

    function hideNotificationHandler() {
        setactiveNotification(null);
    }
    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification : hideNotificationHandler
    }

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
    
}

export default NotificationContext;
