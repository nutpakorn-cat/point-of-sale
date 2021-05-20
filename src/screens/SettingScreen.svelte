<div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                ตั้งค่าพื้นฐาน
            </div>
            <div class="card-body">
                <div class="container text-center">
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-4" style="padding-top: 8px;">ชื่อร้าน</div>
                        <div class="col-md-8"><input type="text" class="form-control" placeholder="ชื่อร้านค้า"></div>
                    </div>
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-4" style="padding-top: 8px;">รูปร้าน</div>
                        <div class="col-md-8"><input type="text" class="form-control" placeholder="ชื่อร้านค้า"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

</script>