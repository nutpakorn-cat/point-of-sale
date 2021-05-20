<script>
    import { navigate } from 'svelte-navigator';
    
    localStorage.removeItem('token');
    localStorage.removeItem('sellerId');
    localStorage.removeItem('permission');
    navigate('/', {replace: true});
</script>