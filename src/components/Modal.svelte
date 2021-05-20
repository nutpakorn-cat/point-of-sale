{#if isShow}
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{modalTitle}</h5>
                    </div>
                    <div class="modal-body">
                        {#if modalComponent == 'AddMember'}
                            <AddMember modalData={modalData} />
                        {:else if modalComponent == 'EditMember'}
                            <EditMember modalData={modalData} />
                        {:else if modalComponent == 'AddProduct'}
                            <AddProduct modalData={modalData} />
                        {:else if modalComponent == 'EditProduct'}
                            <EditProduct modalData={modalData} />
                        {:else if modalComponent == 'AddDiscount'}
                            <AddDiscount modalData={modalData} />
                        {:else if modalComponent == 'EditDiscount'}
                            <EditDiscount modalData={modalData} />
                        {:else if modalComponent == 'AddSeller'}
                            <AddSeller modalData={modalData} />
                        {:else if modalComponent == 'EditSeller'}
                            <EditSeller modalData={modalData} />
                        {:else}
                            {@html modalBody}
                        {/if}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" on:click={close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<script>

    import AddMember from './AddMember.svelte';
    import EditMember from './EditMember.svelte';
    import AddProduct from './AddProduct.svelte';
    import EditProduct from './EditProduct.svelte';
    import AddDiscount from './AddDiscount.svelte';
    import EditDiscount from './EditDiscount.svelte';
    import AddSeller from './AddSeller.svelte';
    import EditSeller from './EditSeller.svelte';

    export let modalTitle;
    export let modalBody;
    export let close;
    export let isShow;
    export let modalComponent;
    export let modalData;
    
</script>