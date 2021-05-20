<div>
    <div class="row" style="margin-top: 100px;">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    {#if isError}
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            Username หรือ Password ไม่ถูกต้อง
                            <button on:click={closeError} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    {/if}
                    <h5 class="card-title">Login</h5>
                    <hr>
                    <input bind:value={username} type="text" class="form-control" placeholder="username" required="" style="margin-bottom: 8px;">
                    <input bind:value={password} type="password" class="form-control" placeholder="password" required="" style="margin-bottom: 8px;">
                    <button on:click={login} class="btn btn-success" style="width: 100%;">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-navigator';
    
    import dataService from './../dataService';

    let isError = false;

    let username = '';
    let password = '';

    onMount(() => {
        if (localStorage.getItem('loginData'))
            navigate('/manage', {replace: true});
    })
    
    const login = async () => {
        const loginResult = await dataService.login(username, password);

        if (loginResult.data.loginData) {
            localStorage.setItem('loginData', loginResult.data.loginData);
            localStorage.setItem('sellerId', loginResult.data.sellerId);
            localStorage.setItem('permission', JSON.stringify(loginResult.data.permission));
            navigate('/manage', {replace: true});
        } else {
            isError = true;
        }
    }

    const closeError = () => {
        isError = false;
    }
</script>