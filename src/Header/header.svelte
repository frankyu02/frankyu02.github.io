<script>
    let space = String.fromCharCode(160);
</script>
<main>
    <h1>Frank Yu</h1>
    <div class="subheader">
        <a href="https://github.com/frankyu02">https://github.com/frankyu02 </a>
        <span>{space} | {space}</span>
        <p>f48yu@uwaterloo.ca</p>
    </div>
</main>

<style>
    h1{
        margin-bottom: 0;
        text-align: center;
    }
    .subheader{
        padding: 0 10%;
        display: flex;
        justify-content: center;
        border-bottom: 2px solid;
    }
    .subheader :global(p){
        margin: 0;
    }
</style>