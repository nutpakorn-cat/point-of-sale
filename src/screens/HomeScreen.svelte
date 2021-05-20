<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-navigator';

    let isLogin = localStorage.getItem('loginData');

    onMount(() => {

        if (isLogin)
            navigate('/manage', {replace: true});
        else
            navigate('/login', {replace: true});
    });
</script>