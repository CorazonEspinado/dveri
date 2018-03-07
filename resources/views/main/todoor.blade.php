<div class="modal fade" id="todoor" tabindex="-1" role="dialog" aria-labelledby="todoor" aria-hidden="true" >
    <div class="modal-dialog" role="document">


        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h5 class="modal-title" id="exampleModalLabel" align="center">Отправить в дверь</h5>


            </div>
            <form action="" method="post" id="sendtodoor">

                <div class="modal-body" id="newtask">

                    <div class="col-4-md">
                        <div class="form-group">
                            <label for="refresh_interval">
                                Info-refresh-interval:
                            </label>
                            <input type="number" name='refresh_interval' id='refresh_interval'>
                        </div>
                    </div>

                    
                    <div class="col-4-md">
                        <div class="form-group">
                            <label for='refresh_url'>
                                Refresh URL:
                            </label>
                            <input type="url">
                        </div>
                    </div>
               

                <div class="col-4-md">
                    <div class="form-group">
                        <label for='watchdog_interval'>
                            Watchdog Interval:
                        </label>
                        <input type="number" name='watchdog_interval' id='watchdog_interval'>
                    </div>
                </div>
                
                <div class="col-4-md">
                    <div class="form-group">
                        <label for='upload_interval'>
                            Upload Interval:
                        </label>
                        <input type="number" name='upload_interval' id='upload_interval'>

                    </div>
                </div>
                
                <div class="col-4-md">

                </div>

 </div>
                <div class="modal-footer">
                    <input type="submit" class="btn btn-success  pull-left" value="Сохранить">

                    <button type="button" class="btn btn-danger" data-dismiss="modal">Отменить</button>

                </div>
            </form>
        </div>

    </div>
</div>

