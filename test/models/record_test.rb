require 'test_helper'

class RecordTest < ActiveSupport::TestCase
  def setup
    @record = Record.new(names: 'diego', lastnames: 'Bolaños', phone: '12345')
  end

  test "el nombre es requerido" do
    @record.names = " "
    assert_not @record.valid?
  end

  test "el telefono debe ser unico" do
    @record.save
    record2 = Record.new(names: "Nombre", lastnames: 'Boss', phone: '12345')
    assert_not record2.valid?
  end

  test "el telefono no puede exceder los 10 caracteres" do
    @record.phone = '23' * 26
    assert_not @record.valid?
  end
  test "la longitud del telefono no puede ser menor a 7 caracteres" do
    @record.phone = '2'
    assert_not @record.valid?
  end

end
