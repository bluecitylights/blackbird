<!-- https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started
-->

<svelte:head>
	<script src="https://sdk.scdn.co/spotify-player.js"></script>
</svelte:head>

<script>
    import { toast } from "@zerodevx/svelte-toast";

    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = '<token>';
        const player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });
        
        // Ready
        player.addListener('ready', ({ device_id }) => {
            toast.push(`Ready with Device ID ${device_id}`)
            console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.addListener('initialization_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('authentication_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('account_error', ({ message }) => {
            console.error(message);
        });

        const togglePlayElement = document.getElementById('togglePlay');
        if (togglePlayElement) {
            togglePlayElement.addEventListener('click', function() {
                player.togglePlay();
            });
        }

        player.connect();
    }
</script>

<h1>Blackbird Groove</h1>