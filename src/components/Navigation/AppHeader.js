import { MenuOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Row, Col } from "antd";
import smallLogo from "../../assets/nutrition_management_logo-180px.png";
import largeLogo from "../../assets/nutrition_management_logo-410px.png";
import navigation from "../../hooks/navigation";
import { NAVIGATION_LINKS } from "../../constants";
import { NavLink } from "react-router-dom";
import FacebookLoginButton from "../../containers/FacebookLogin";
import { useSelector } from "react-redux";
import { locationSelector } from "../../selectors";

const { Header } = Layout;

const AppHeader = (props) => {
  const { historyPush } = navigation();
  const { pathname } = useSelector(locationSelector);

  const onMenuClick = (e) => {
    historyPush(e.key);
  };
  return (
    <>
      <header className="header-placeholder" />
      <Header className="app-header">
        <Row justify="space-between">
          <Col>
            <NavLink to={NAVIGATION_LINKS.myRecipes.path} exact>
              {/* it is easier to manipulate two images than srcSet */}
              <img
                src={smallLogo}
                alt="Small Logo"
                className="header-small-logo"
              />
              <img
                src={largeLogo}
                alt="Large Logo"
                className="header-large-logo"
              />
            </NavLink>
          </Col>
          <Col>
            <Row>
              <Col>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  selectedKeys={[pathname]}
                  onClick={onMenuClick}
                >
                  {Object.values(NAVIGATION_LINKS).map((link) => (
                    <Menu.Item key={link.path}>{link.text}</Menu.Item>
                  ))}
                </Menu>
              </Col>
              <Col>
                <Button
                  size="large"
                  className="navigation-menu-btn"
                  ghost
                  onClick={props.openDrawerHandler}
                >
                  <MenuOutlined />
                </Button>
                <Col className="facebook-login-col">
                  <FacebookLoginButton />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default AppHeader;
