{#if isShow}
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{modalTitle}</h5>
                    </div>
                    <div class="modal-body">
                        {modalData}
                        {#if modalComponent == 'AddMember'}
                            AddMember
                        {:else if modalComponent == 'EditMember'}
                            EditMember
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

    export let modalTitle;
    export let modalBody;
    export let close;
    export let isShow;
    export let modalComponent;
    export let modalData;
    
</script>