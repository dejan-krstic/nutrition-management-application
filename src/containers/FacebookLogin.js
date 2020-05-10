import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookOutlined } from "@ant-design/icons";
import { Button, Avatar, message } from "antd";
import { connect } from "react-redux";
import { userAvatarUrlSelector } from "../selectors";
import { setUserData } from "../actions";
import { useCallback } from "react";

const FacebookLoginButton = ({ avatarUrl, setUserData }) => {
  const onFacebookResponse = useCallback(
    (userData) => {
      if (userData && userData.accessToken) {
        setUserData(userData);
      }
    },
    [setUserData],
  );
  const onFacebookFailure = useCallback(
    (error) => {
      message.error(`Login failed: ${error.message}`, 5);
    },
    [message],
  );

  return (
    <FacebookLogin
      appId="643332876523611"
      //   autoLoad={true} //don't want to login on reload
      fields="name,email,picture"
      callback={onFacebookResponse}
      onFailure={onFacebookFailure}
      render={(renderProps) => (
        <>
          (
          <Button
            size="large"
            className="facebook-login-btn"
            ghost
            onClick={renderProps.onClick}
          >
            {avatarUrl ? (
              <Avatar src={avatarUrl} style={{ marginBottom: "0.5rem" }} />
            ) : (
              <FacebookOutlined />
            )}
          </Button>
          )}
        </>
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  avatarUrl: userAvatarUrlSelector(state),
});

export default connect(mapStateToProps, { setUserData })(FacebookLoginButton);
