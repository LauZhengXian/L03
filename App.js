import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import Movie from "./components/Movie";

class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
          <Movie title={"Doctor Sleep"}
                 year={2019}
                 icon_name={"skull"}
                 icon_color={"red"}
                 poster={require('./img/doctor-sleep.jpg')}/>
            <Movie
                title={'Midway'}
                year={2020}
                icon_name={'person-rifle'}
                icon_color={'red'}
                poster={require('./img/midway.jpg')}
            />
            <Movie
                title={'Avengers: Doomsday'}
                year={2025}
                icon_name={'star'}
                icon_color={'black'}
                poster={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyQYCsvxkR5AS3tTMhNgR47IgGaxnWXy70ELn6ztDRQ&s=10' }}
            />

        </ScrollView>
    )
  }
}

export default AllMovies;

