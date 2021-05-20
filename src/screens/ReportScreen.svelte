{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).report}
    <div>
        <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
            <div class="card">
                <div class="card-header">
                    ส่วนลด
                </div>
                <div class="card-body">
                    <div class="container text-center">
                        <div class="row text-center" style="margin-top: 30px;">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                                <div class="row">
                                    <div class="col-md-4" style="padding-top: 8px;">รายงานวันที่</div>
                                    <div class="col-md-8"><input on:change={fetchData} bind:value={startDate} type="date" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <br>
                        {#if ('reportId') in reportData}
                            <button on:click={createReport} class="btn btn-primary">ออกรายงานอีกครั้ง</button>
                            <br>
                            <br>
                            <object data={reportData.reportURL} type="application/pdf" width="100%" height="1000px">
                                
                            </object>
                        {:else}
                            <h2>ยังไม่มีรายงานในเดือนนี้</h2>
                            <button on:click={createReport} class="btn btn-primary">ออกรายงานใหม่</button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

    let reportData = {};
    let startDate = '';

    onMount(() => {
        fetchData();
    });

    const fetchData = async () => {
        const result = await dataService.getReportByDate(startDate);

        if (('error') in result.data)
            return;

        reportData = result.data;
    }

    const createReport = async () => {
        await dataService.createReport(startDate);
        await fetchData();
    }

</script>