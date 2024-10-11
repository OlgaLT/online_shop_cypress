class checkOutElements {
  public static readonly stepAddress = '#order_step .third';
  public static readonly deliveryAddressBox = '#address_delivery';
  public static readonly billingAddress = '#address_invoice';
  public static readonly proceedButton = '#center_column form  button';
  public static readonly stepShipping = '#order_step .four';
  public static readonly deliveryOptions = '.delivery_option';
  public static readonly optionsRadioButton = '[id^="delivery_option"]';
  public static readonly termsCheckBox = '#cgv';
  public static readonly stepPayment = '#order_step .last';
  public static readonly chequePayment = '.cheque';
  public static readonly successAlert = '.alert-success';
  public static readonly successAlertText: string = 'Your order on My Shop is complete.'

}

export default checkOutElements