import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions, 
  PermissionsAndroid
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Tab, Tabs, Button, Left, Right } from "native-base";
import axios from "axios"
import About from "../Movies/AboutMovie";
import Cast from "../Movies/Cast";
import Review from "../Movies/Review";
import VideoPlayer from "../../components/Video";
import RNFetchBlob from 'react-native-fetch-blob'
import RNBackgroundDownloader from 'react-native-background-downloader';






saveFile = async () => {

  try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Permission granted");

      } else {
          console.log('Permission denied');
      }
      } catch (err) {
          console.warn(err);
      }

}



class MovieDetail extends React.Component {
  state = {
    mute: false,
    fullScreen: false,
    shouldPlay: true
  };



  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay
    }));
  };

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute
    }));
  };
  handleRef = (ref) => {
    this.player = ref
  }

  handleDownload(uri, filename){
    saveFile()
    let task = RNBackgroundDownloader.download({
      id: 'file123',
      url: uri,
      destination: `${RNBackgroundDownloader.directories.documents}/file.zip`
    }).begin((expectedBytes) => {
      console.log(`Going to download ${expectedBytes} bytes!`);
    }).progress((percent) => {
      console.log(`Downloaded: ${percent * 100}%`);
    }).done(() => {
      console.log('Download is done!');
    }).error((error) => {
      console.log('Download canceled due to error: ', error);
    });
    
    // task.begin()
    const { config } = RNFetchBlob
    let options = {
      fileCache: true,
      addAndroidDownloads : {
        useDownloadManager : true,
        notification : false,
        path:  RNFetchBlob.fs.dirs.MovieDir + `/${filename}`,
        fileCache: true,
        description : 'Downloding Video.'
      }
    }
    config(options).fetch('GET', uri).then((res) => {
        console.log("file downlaoded", res.path())    })
  }

  render() {
    const Movie = this.props.navigation.getParam("Detail");
    const movieUri = `http://kannywoodtv.live/api/files/${Movie.filename}`;
    const filename = Movie.filename
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={{ height: 0.5 * Dimensions.get("window").height }}>
          {/* <ImageBackground
            source={{
              uri: `http://kannywoodtv.live/api/files/${Movie.thumbnail}`
            }}
            style={styles.ImageBackground}
          >
            <View></View>
            <View style={styles.TitleContainer}>
              <Left style={{ top: "15%" }}>
                <Text style={styles.TitleText}>{Movie.MovieName}</Text>
                <Text style={styles.TitleText2}>{Movie.DateRegistered}</Text>
                <Text style={styles.TitleText2}>{Movie.category}</Text>
              </Left>
              <Right style={{ top: "10%" }}>
                <TouchableOpacity>
                  <Icon
                    name="md-bookmark"
                    size={30}
                    color="#FFFFFF"
                    style={{ margin: 40, top: "5.47%", left: "2.06%" }}
                  />
                </TouchableOpacity>
              </Right>
            </View>
          </ImageBackground> */}
          <VideoPlayer uri={movieUri} />
        </View>
        <View style={styles.BtnContainer}>
          {/* <Button style={styles.BtnStream}>
            <Text style={styles.BtnText}> Stream</Text>
          </Button>
          <Button
            bordered
            success
            style={styles.BtnDownload}
            onPress={this.handleDownload.bind(this, movieUri, filename)}
          >
            <Text style={styles.BtnText}>Download</Text>
          </Button> */}
          {/* <View> */}
          <View style={{flexDirection: "column", justifyContent: "center", flex: 3, paddingHorizontal: 10}}>
          <Text style={{fontWeight: "bold", fontSize: 16, color: "#FFFFFF"}}>{Movie.MovieName}</Text>
          <Text style={{fontSize: 14, color: "#FFFFFF"}}>{Movie.category}</Text>
          </View>
          <View style={{flex: 1,flexDirection: "row",}}>
          <View style={{ flex: 2}}>
          <TouchableOpacity>
          <Icon name="md-bookmark" size={30} color="#FFFFFF"/>
          </TouchableOpacity>
          </View>
          <View style={{ flex: 2}}>
            <TouchableOpacity>
          <Icon name="md-cloud-download" size={30}  color="#FFFFFF" />
          </TouchableOpacity>
          </View>
          </View>


        </View>
        <View style={styles.NavStyle}>
          <Tabs tabBarUnderlineStyle={{ backgroundColor: "#01C851" }}>
            <Tab
              heading="About"
              tabStyle={{ backgroundColor: "#27293D" }}
              textStyle={{
                color: "#fff",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 16
              }}
              activeTabStyle={{ backgroundColor: "#27293D" }}
              activeTextStyle={{
                color: "#01C851",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 16
              }}
            >
              <About details={Movie}/>
            </Tab>
            <Tab
              heading="Cast"
              tabStyle={{ backgroundColor: "#27293D" }}
              textStyle={{
                color: "#fff",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 16
              }}
              activeTabStyle={{ backgroundColor: "#27293D" }}
              activeTextStyle={{
                color: "#01C851",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 16
              }}
            >
              <Cast />
            </Tab>
            <Tab
              heading="Review"
              tabStyle={{ backgroundColor: "#27293D" }}
              textStyle={{
                color: "#fff",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 16
              }}
              activeTabStyle={{ backgroundColor: "#27293D" }}
              activeTextStyle={{
                color: "#01C851",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 16
              }}
            >
              <Review />
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27293D"
  },
  ImageBackground: {
    flex: 2,
    width: "100%",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0) 0%, #000000 100%)"
  },
  TitleContainer: {
    flexDirection: "row",
    top: "30%",
    left: 21,
    justifyContent: "space-between"
  },
  TitleText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    fontStyle: "normal"
  },
  TitleText2: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal"
  },
  BtnContainer: {
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 5
  },
  BtnStream: {
    width: 150,
    height: 53,
    backgroundColor: "#01C851",
    borderRadius: 10,
    margin: 15
  },
  BtnDownload: {
    width: 150,
    height: 53,
    borderRadius: 10,
    margin: 15
  },
  BtnText: {
    flex: 1,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal"
  },
  NavStyle: {
    flex: 1,
  }
});

export default MovieDetail;
