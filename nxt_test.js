var Nxt = require("./nxt").Nxt;

var nxt = new Nxt("/dev/tty.NXT-DevB", function() {
  nxt.play_tone(440, 1000);
  nxt.set_output_state(nxt.MOTOR_A, 150, nxt.MOTORON, nxt.REGULATION_MODE_IDLE, 0, nxt.MOTOR_RUN_STATE_RUNNING, 1200);
  // nxt.debug = true;
  // nxt.set_input_state(nxt.INPUT_PORT_2, nxt.SWITCH, nxt.BOOLEANMODE);
  // nxt.get_input_values(nxt.INPUT_PORT_2);
  // setTimeout(nxt.close_connection(nxt.sp),10000);
});
