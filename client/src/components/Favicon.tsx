import { useEffect } from "react";

/**
 * Componente que garante o carregamento do favicon
 * Injeta dinamicamente o favicon no head do documento
 */
export function Favicon() {
  useEffect(() => {
    // Função para atualizar o favicon
    const updateFavicon = (href: string) => {
      // Remove favicons existentes
      const existingLinks = document.querySelectorAll('link[rel*="icon"]');
      existingLinks.forEach((link) => {
        if (link.getAttribute("href")?.includes("favicon")) {
          link.remove();
        }
      });

      // Cria novos links para o favicon
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = href;
      document.head.appendChild(link);

      // Também cria um shortcut icon para compatibilidade
      const shortcutLink = document.createElement("link");
      shortcutLink.rel = "shortcut icon";
      shortcutLink.type = "image/png";
      shortcutLink.href = href;
      document.head.appendChild(shortcutLink);
    };

    // Tenta carregar o favicon
    const faviconPath = "/favicon.png";
    
    // Verifica se o arquivo existe fazendo uma requisição
    const img = new Image();
    img.onload = () => {
      updateFavicon(faviconPath);
    };
    img.onerror = () => {
      // Fallback para favicon.ico se png não existir
      updateFavicon("/favicon.ico");
    };
    img.src = faviconPath;

    // Força atualização após um pequeno delay para garantir
    setTimeout(() => {
      updateFavicon(faviconPath);
    }, 100);
  }, []);

  return null; // Componente não renderiza nada
}

