class UsuarioModel {
  final List<String> _usuarios = [];

  void adicionarUsuario(String nome) {
    _usuarios.add(nome);
  }

  List<String> listarUsuarios() {
    return _usuarios;
  }
}