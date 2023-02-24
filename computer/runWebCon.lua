while true do
  local url = 'http://81.167.168.153:25584/data'

  local headers = {
    ["Content-Type"] = "application/json"
  }

  local target = peripheral.wrap("left")

  local rpm = string.gsub(target.getLine(1), "[%a%s]", "")
  local running = rpm ~= "0"

  local data = {
    owner = "Elliot",
    item = "Oak Wood",
    running = running,
    total = string.gsub(target.getLine(2), "[%a%s]", ""),
    inStorage = string.gsub(target.getLine(3), "[%a%s]", ""),
    image = "oak_log.png"
  }

  local body = textutils.serializeJSON(data)
  local response = http.post(url, body, headers)

    if response then
      shell.run("clear")
      paintutils.drawFilledBox(2, 2, 50, 11, colors.gray)
      term.setCursorPos(3, 3)
      term.setBackgroundColor(colors.black)
      print('Home')
      term.setBackgroundColor(colors.gray)
      term.setCursorPos(22, 3)
      term.setTextColor(colors.green)
      print('Linux XP')
      print("")
      term.setTextColor(colors.cyan)
      term.setCursorPos(15, 5)
      print("Response from server:")
      print("")
      term.setTextColor(colors.white)
      term.setCursorPos(4, 7)
      print(response.readAll())
      term.setCursorPos(4, 9)
      print("Running:", running)
      term.setCursorPos(4, 10)
      print("Total:", target.getLine(2))
      term.setBackgroundColor(colors.black)
      print("")
      print("")
      response.close()
    else
      print('Error sending data')
    end
  sleep(300)
end
