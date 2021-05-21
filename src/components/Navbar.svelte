<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">{storeName}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <Link to="/manage" class={shouldActive('manage')}>ขายของ</Link>
                </li>
                <li class="nav-item">
                    <Link to="/history" class={shouldActive('history')}>ประวัติการขาย</Link>
                </li>
                <li class="nav-item">
                    <Link to="/member" class={shouldActive('member')}>สมาชิก</Link>
                </li>
                <li class="nav-item">
                    <Link to="/inventory" class={shouldActive('inventory')}>คลังสินค้า</Link>
                </li>
                <li class="nav-item">
                    <Link to="/discount" class={shouldActive('discount')}>ส่วนลด</Link>
                </li>
                <li class="nav-item">
                    <Link to="/report" class={shouldActive('report')}>รายงาน</Link>
                </li>
                <li class="nav-item">
                    <Link to="/setting" class={shouldActive('setting')}>จัดการร้าน</Link>
                </li>
                <li class="nav-item">
                    <Link to="/logout" class="nav-link">ออกจากระบบ</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

<script>
    
    import { Link } from "svelte-navigator";
    import { onMount } from 'svelte';

    import dataService from './../dataService';

    let storeName = '';

    onMount(async () => {
        const result = await dataService.getPointDiscountRate();
        storeName = result.data.storeName;
    });

    const shouldActive = (path) => {
        return (location.href.includes(path)) ? 'nav-link active' : 'nav-link';
    }
</script>