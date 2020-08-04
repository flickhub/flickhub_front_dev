import React from "react";
import Shimmer from "../Shimmer";
import MobileHover from "./MobileHover";
import Grid from "@material-ui/core/Grid";
import BlackFade from "./../components/BlackFade/BlackFade";
import SearchBar from "../components/SearchBar/SearchBar";

export const logoStlye = {
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "75px",
};

const MobileFlickhub = (props) => {
  const [respObj, setRespObj] = React.useState(null);

  React.useEffect(() => {
    fetch("http://flickhub.in/random", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      // .then((response) => console.log("Random ", response))
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div style={logoStlye}>
      <div style={logoStlye}>
        <h1 style={{ fontSize: "75px" }}>
          Flick<span style={{ color: "orange" }}>Hub</span>
        </h1>
        <span style={{ fontSize: "18px", marginTop: "-10px" }}>
          Nobody searches it better
        </span>
        {/* <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton className={classes.title}>
                <img src={flickhub} height="30" width="30" alt="" />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </main>
        </div> */}
      </div>

      {/* <div
        style={{
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          autoFocus
          placeholder="Search"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              //window.location = `/search/${search}`;
              history.push(`/search/${search}`);
            }
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            e.target.value !== ""
              ? (disableRef.current.disabled = false)
              : (disableRef.current.disabled = true);
          }}
          onFocus={(e) => {
            e.target.style.outline = "none";
            e.target.style.border = "none";
          }}
          style={{
            width: "60vw",
            height: "37px",
            padding: "5px 10px",
            border: "none",
            color: "#6e6d7a",
            //borderRadius: "5px",
          }}
        />

        <Link to={`/search/${search}`}>
          <button
            ref={disableRef}
            disabled
            type="button"
            className="btn btn-light"
            style={{
              backgroundColor: "orange",
              borderRadius: "0px",
              border: "none",
              width: "10vw",
              height: "37px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchOutlinedIcon />
          </button>
        </Link>
      </div> */}
      <SearchBar width="90vw" marginTop="40px" mobile={true} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "17px",
            color: "white",
            marginTop: "20px",
            wordWrap: "break-word",
            textAlign: "center",
            fontStyle: "italic",
            width: "70%",
          }}
        >
          Looking for something to watch?
          <br />
          Type in the name and witness the magic unfold!!
        </p>
      </div>
      <BlackFade />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141414",
          width: "100vw",
          padding: "30px 15px 150px 15px",
          marginTop: "0px",
        }}
      >
        <Grid container spacing={1}>
          {respObj ? (
            respObj.data.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  md={3}
                  sm={3}
                  xs={6}
                  style={{ height: "180px" }}
                >
                  <MobileHover item={item} key={`search-result-${item.name}`} />
                </Grid>
              );
            })
          ) : (
            <div>
              <Shimmer />
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default MobileFlickhub;
