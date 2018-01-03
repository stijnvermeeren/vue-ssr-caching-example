<template>
  <div>
    <h1>Music</h1>
    <div><nuxt-link to="/">To index page</nuxt-link></div>
    <div v-for="artist in artists">
      <h2>{{artist.name}}</h2>
      <ul>
        <li v-for="song in songsByArtistId[artist.id]">
          {{song.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      artists() {
        return this.$store.state.artists;
      },
      songsByArtistId() {
        const result = {};
        console.log("Now looping over all songs.");
        this.$store.state.songs.forEach(song => {
          if (result.hasOwnProperty(song.artist_id)) {
            result[song.artist_id].push(song);
          } else {
            result[song.artist_id] = [song];
          }
        });
        return result;
      }
    }
  }
</script>
