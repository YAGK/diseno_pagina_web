$("#dateAndTimePicker1").datetimepicker({
    onShow:function( ct ){
    this.setOptions({
    maxDate:jQuery('#dateAndTimePicker2').val()?jQuery('#dateAndTimePicker2').val():false
    })
    },
   
    format: 'Y-m-d H:i:i',
    formatTime: 'H:i:i',
    formatDate: 'Y-m-d',
    step: 15

});

$("#dateAndTimePicker2").datetimepicker({
    onShow:function( ct ){
    this.setOptions({
    minDate:jQuery('#dateAndTimePicker1').val()?jQuery('#dateAndTimePicker1').val():false,
    })
    },
    

    format: 'Y-m-d H:i:i',
    formatTime: 'H:i:i',
    formatDate: 'Y-m-d',
    step: 15
    
});