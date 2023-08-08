<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { page } from "$app/stores";
	import { signIn, signOut } from "@auth/sveltekit/client";
</script>

<div class="app">
	<Header />

	<main>
		<h1>SvelteKit Auth Example</h1>
		<p>
			{#if $page.data.session}
				{#if $page.data.session.user?.image}
				<span
					style="background-image: url('{$page.data.session.user.image}')"
					class="avatar"
				/>
				{/if}
				<span class="signedInText">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.name ?? "User"}</strong>
				</span>
				<button on:click={() => signOut()} class="button">Sign out</button>
			{:else}
				<span class="notSignedInText">You are not signed in</span>
				<button on:click={() => signIn("spotify")}>Sign In with Spotify</button>
			{/if}
		</p>

		<nav>
			<ul class="navItems">
			  <li class="navItem"><a href="/">Home</a></li>
			  <li class="navItem"><a href="/protected">Protected</a></li>
			</ul>
		  </nav>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
