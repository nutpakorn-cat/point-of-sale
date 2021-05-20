{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).inventory}
    <div>
        <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
            <div class="card">
                <div class="card-header">
                    คลังสินค้า
                </div>
                <div class="card-body">
                    <div class="text-center" style="margin-bottom: 50px;margin-top: 30px;">
                        <button on:click={() => { isShowAddProduct = true; }} class="btn btn-success">+ เพิ่มสินค้า</button>
                        <Modal
                            modalTitle="เพิ่มสินค้า"
                            modalComponent="AddProduct"
                            isShow={isShowAddProduct}
                            close={() => { isShowAddProduct = false }}
                        />
                    </div>
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-4" style="padding-top: 8px;">เริ่มต้นวันที่</div>
                                    <div class="col-md-8"><input on:change={fetchData} bind:value={startDate} type="date" class="form-control"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-4" style="padding-top: 8px;">สิ้นสุดวันที่</div>
                                    <div class="col-md-8"><input on:change={fetchData} bind:value={endDate} type="date" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row text-center" style="margin-top: 20px;">
                            <div class="col-md-2" style="padding-top: 8px;">ค้นหา</div>
                            <div class="col-md-8"><input on:change={fetchData} bind:value={query} type="text" class="form-control" placeholder="ชื่อสินค้า"></div>
                            <div class="col-md-2">
                                <button class="btn btn-success">ค้นหา</button>
                            </div>
                        </div>
                        {#if productList}
                            <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                                <thead>
                                    <th>#</th>
                                    <th>Barcode</th>
                                    <th>รูปภาพ</th>
                                    <th>ชื่อสินค้า</th>
                                    <th>ราคา</th>
                                    <th>สต๊อก</th>
                                    <th>จัดการ</th>
                                </thead>
                                <tbody>
                                    {#each productList as product, i}
                                        <Modal
                                            modalTitle={'แก้ไขสินค้า ' + product.productName}
                                            modalComponent="EditProduct"
                                            isShow={isShowEditProduct[i]}
                                            close={() => { isShowEditProduct[i] = false }}
                                            modalData={product.productId}
                                        />
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{product.productBarCode}</td>
                                            <td><img src={product.productImage} width="200"></td>
                                            <td>{product.productName}</td>
                                            <td>{product.productPrice}</td>
                                            <td>{product.productStock}</td>
                                            <td>
                                                <button on:click={() => { isShowEditProduct[i] = true }} class="btn btn-warning" style="color: white;">แก้ไข</button>
                                                <button on:click={() => { deleteProduct(i) }} class="btn btn-danger">ลบ</button>
                                            </td>
                                        </tr>
                                    {/each}
                                </tbody>
                            </table>
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

    import Modal from '../components/Modal.svelte';

    let productList = [];

    let startDate = '';
    let endDate = '';
    let query = '';

    let isShowEditProduct = [];
    let isShowAddProduct = false;
    let isShowProduct = [];

    onMount(() => {
        fetchData();
    });

    const fetchData = async () => {

        const result = await dataService.getProductByDateAndQuery(startDate, endDate, query);

        if (('error') in result.data)
            return;

        productList = result.data;
    }

    const deleteProduct = async (i) => {
        const result = await dataService.deleteProductById(productList[i].productId);

        if ('error' in result.data)
            return;

        productList.splice(i, 1);
        productList = productList;
    }

</script>