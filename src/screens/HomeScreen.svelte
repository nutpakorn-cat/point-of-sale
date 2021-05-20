<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-navigator';

    let isLogin = localStorage.getItem('isLogin');

    onMount(() => {
        if (isLogin)
            navigate('/manage', {replace: true});
        else
            navigate('/login', {replace: true});
    });
</script>