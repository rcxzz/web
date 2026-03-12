import 'model.dart';
import 'view.dart';
import 'controller.dart';

void main() {
  var model = UsuarioModel();
  var view = UsuarioView();
  var controller = UsuarioController(model, view);

  controller.criarUsuario("Junin");
  controller.criarUsuario("Carlos");
  controller.criarUsuario("Silvia");
  controller.criarUsuario("Eric");

  controller.mostrarUsuarios();
}