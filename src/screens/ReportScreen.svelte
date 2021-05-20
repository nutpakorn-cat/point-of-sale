<div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                ส่วนลด
            </div>
            <div class="card-body">
                <div class="container">
                    <div class="row text-center" style="margin-top: 30px;">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-md-4" style="padding-top: 8px;">รายงานวันที่</div>
                                <div class="col-md-8"><input type="date" class="form-control"></div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <object data="pdf/test.pdf" type="application/pdf" width="100%" height="1000px">
                        
                    </object>
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