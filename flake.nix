{
  description = "Devshell for personal website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { nixpkgs, ... }: {
    devShells = builtins.mapAttrs (system: pkgs: {
      default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_26
          svelte-language-server
        ];
      };
    }) nixpkgs.legacyPackages;
  };
}
