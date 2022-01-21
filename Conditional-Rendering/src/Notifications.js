import css from "./Notifications.css"


function Notifications({ notifications }) {
    return (
      notifications.length > 0 && (
        <>
            <p>You have {notifications.length} notifications today!</p>
            <h2>This is a test</h2>
        </>
      )
    );
  }

  export default Notifications