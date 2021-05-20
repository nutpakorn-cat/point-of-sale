<script>
    import { navigate } from 'svelte-navigator';
    
    localStorage.removeItem('isLogin');
    navigate('/', {replace: true});
</script>