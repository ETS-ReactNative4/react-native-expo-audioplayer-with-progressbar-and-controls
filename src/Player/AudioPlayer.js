import { Alert } from "react-native";
import { Audio } from "expo";



export default class AudioPlayer {

    index=0;

    constructor(playlist, initialState = {autoPlay: true }) {
  
        this.soundObject = new Audio.Sound();

        this.list = playlist;
    }


    getSongName = () => {
        return this.list[this.index].name;
    };


    Fastforward = async () => {
          const Mill = await this.soundObject.getStatusAsync();
          let p = Mill.positionMillis;
          await this.soundObject.setPositionAsync(p+5000);
    };


    Fastbackward = async () => {
          const Mill = await this.soundObject.getStatusAsync();
          let p = Mill.positionMillis;
          await this.soundObject.setPositionAsync(p-5000);
    };
   

  CurrentDuration = async () => {

        const Mill = await this.soundObject.getStatusAsync();
        let p = Mill.positionMillis;
        return {curr:p};
  };
 

    PlayPause = async (playing) => {
        const index=this.index;
        const path = this.list[index].path;

        if(playing) {
            await this.soundObject.pauseAsync();
            const milliseconds= await this.soundObject.getStatusAsync();
            console.log(milliseconds.durationMillis);
            return milliseconds.durationMillis;

        } else {

            if(this.soundObject._loaded) {
                await this.soundObject.playAsync();
            } else {
                await this.soundObject.loadAsync(path);
                await this.soundObject.playAsync();
                const milliseconds= await this.soundObject.getStatusAsync();
                console.log(milliseconds.durationMillis)
                return milliseconds.durationMillis;
            }
        }
        
    };


    NextSong = async () => {

        if(!this.list[this.index + 1]) {
            Alert.alert('No More Songs...');
        } else {
            const path = this.list[this.index + 1].path;
            this.index++;
            await this.soundObject.unloadAsync();
            await this.soundObject.loadAsync(path);
            await this.soundObject.playAsync();
             const milliseconds= await this.soundObject.getStatusAsync();
            console.log("The duration is",milliseconds.durationMillis)
            return milliseconds.durationMillis;

        }
    };


    PreviousSong = async () => {
        if(!this.list[this.index  - 1]) {
            Alert.alert('No Previous Song Available...');
        } else {
            const path = this.list[this.index  - 1].path;
            this.index--;
            await this.soundObject.unloadAsync();
            await this.soundObject.loadAsync(path);
            await this.soundObject.playAsync();
            const milliseconds= await this.soundObject.getStatusAsync();
            console.log("The duration is",milliseconds.durationMillis)
            return milliseconds.durationMillis;

        }
    };
}
