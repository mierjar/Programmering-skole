<script>
	let statement = false
	let names = ['mie', ' bjørn', ' simmoe']
	names = [...names, ' palme']
	let count = 0
	let name = 'name'
	let alder = [
		{ id: 18, text: `18` },
		{ id: 19, text: `19` },
		{ id: 30, text: `30+` }
	];
  	let selected = ''
	let answer = '';
	let happy
</script>

<main>
	  {#if statement}
    <h1>Hello sir or madam!</h1>
  {/if}
  <button on:click ={ () => statement = !statement}>click me to show</button>
	<header>
	</header>
	<button on:click={ () => count = count + 1 }>click me to count</button>
	<h2>
		this button was clicked {count} times
	</h2>
<h2>
	den her person hedder {name} og er {selected ? selected.id : '[waiting...]'} år gammel
	</h2>
	        <input bind:value={name}>
<form>
<select bind:value={selected} on:change="{() => answer = ''}">		
	{#each alder as alder}
			<option value={alder}>
				{alder.text}
			</option>
		{/each}
	</select>

Lars is { happy > .5 ? 'happy' : 'suicidal' }
	<p>selected question {selected ? selected.id : '[waiting...]'}</p>
 {#if statement}
    <h1>Hello sir or madam!</h1>
  {/if}
</main>

 
<style>
	h1, h2{
		font-weight: 300;
		color: pink;
		display:grid;
		place-items: center;
	}
	main{
		display:grid;
		place-items:center;
	}
	input { display: block; width: 500px; max-width: 100%; }

</style>