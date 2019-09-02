import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";
import search from "../assets/search.png";
import poster from "../assets/posters/IMG1.jpg";
import { connect } from "react-redux";
import { MoviesAction } from "../Actions/MoviesAction";
import { createStructuredSelector } from "reselect";
import { selectAllMovies } from "../Selectors/MovieSelector";

var { width, height } = Dimensions.get("window");
width = Dimensions * 0.9;

class MoviesTab extends React.Component {
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    var data = await this.props.MoviesAction();
  }
  _keyExtractor = (item, index) => {
    return item._id;
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.movieCard}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("MovieDetail", { Detail: item });
          }}
        >
          <Image
            style={styles.MoviePoster}
            source={{
              uri: `http://kannywoodtv.live/api/files/${item.thumbnail}`
            }}
          />
        </TouchableOpacity>
        <Text style={styles.MovieTitle}>{item.MovieName}</Text>
        <Text style={styles.MovieCategory}>{item.category}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.filterMenu}>
          <TouchableOpacity>
            <View style={styles.filterWrap}>
              <Text style={styles.filterText}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.filterWrap}>
              <Text style={styles.filterText}>New</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.filterWrap2}>
              <Text style={styles.filterText}>Upcoming</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.filterWrap2}>
              <Text style={styles.filterText}>Popular</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.SearchContainer}>
          <View style={{ width: "100%" }}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#FFFFFF"
              style={styles.SearchTextInput}
            />
          </View>
          <View style={{ width: "10%" }}>
            <TouchableOpacity>
              <Image source={search} style={{ marginTop: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View /> */}

        <View style={{flex: 1}}>
          <FlatList
            data={this.props.Movies}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            horizontal={false}
            numColumns={2}
          />

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
  filterMenu: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    top: "-10%",
    margin: 15
  },
  filterWrap: {
    width: 69,
    height: 26,
    backgroundColor: "#27293D",
    borderRadius: 9,
    shadowColor: "#27293D",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 4,
    shadowRadius: 16.0,
    elevation: 9
  },
  filterWrap2: {
    width: 80,
    height: 26,
    backgroundColor: "#27293D",
    borderRadius: 9,
    shadowColor: "#27293D",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 4,
    shadowRadius: 16.0,
    elevation: 9
  },
  MovieSeriesTextActive: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#01C851"
  },
  MovieSeriesTextStyle: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#FFFFFF"
  },
  filterText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "center"
  },

  SearchContainer: {
    flexDirection: "row",
    top: "-5%",
    justifyContent: "space-between",
    margin: 25,
    paddingHorizontal: 30
  },
  SearchTextInput: {
    width: "90%",
    height: 35,
    borderRadius: 10,
    backgroundColor: "rgba(218, 218, 218, 0.38)",
    padding: 10,
    color: "#FFFFFF",
    fontSize: 10
  },
  MoviesList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  MoviePoster: {
    width: 144.4,
    height: 234,
    borderRadius: 10,
    margin: 15,
    alignItems: "center"
  },
  MovieTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    margin: 5
  },
  MovieCategory: {
    fontStyle: "normal",
    fontSize: 12,
    fontWeight: "normal",
    color: "#FFFFFF",
    margin: 2
  },
  movieCard: {
    width: "50%"
  }
});
const mapStateToProps = createStructuredSelector({
  Movies: selectAllMovies
});
export default connect(
  mapStateToProps,
  { MoviesAction }
)(withNavigation(MoviesTab));