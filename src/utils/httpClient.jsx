
const API = "https://api.themoviedb.org/3";
export function get(path){
    return fetch(API + path, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzdkMWVhZDVlZGQ2OTVmMDBjZjgwZWFmODMxYTA4ZCIsInN1YiI6IjY0MWIzYmIxYTNlNGJhMDBlNzFlNjZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3N02UDy-hOC1qVZJCbNUFwwbwUWuSSGGH_xOFucLyqc",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then(result => result.json())
 
}

