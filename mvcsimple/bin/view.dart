class UsuarioView {
  void mostrarLista(List<String> usuarios) {
    print("Lista de usuários:");
    for (var usuario in usuarios) {
      print("- $usuario");
    }
  }
}