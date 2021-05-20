<script>
    import { navigate } from 'svelte-navigator';
    
    localStorage.removeItem('loginData');
    localStorage.removeItem('sellerId');
    localStorage.removeItem('permission');
    navigate('/', {replace: true});
</script>