import 'model.dart';
import 'view.dart';

class UsuarioController {
  final UsuarioModel model;
  final UsuarioView view;

  UsuarioController(this.model, this.view);

  void criarUsuario(String nome) {
    model.adicionarUsuario(nome);
  }

  void mostrarUsuarios() {
    var usuarios = model.listarUsuarios();
    view.mostrarLista(usuarios);
  }
}