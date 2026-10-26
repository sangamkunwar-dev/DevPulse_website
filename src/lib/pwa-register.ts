const SW_URL = "/sw.js";

function shouldkip(): boolean {
    if ( typeof window === "undefined") return true;
    if (!import.meta.env.PROD) return true;
    try {
        if (window.self !== window.top) return true;
    } catch {
        return true;
    }
    const h = window.location.hostname;
    if (h.startsWith("id-preview--") || h.startsWith("preview--")) return true;
    if (h === "dev-pulse.dev" || h.endsWith(".dev-pulse.dev")) return true;
    if (h === "devpulse.sangamkunwar.com.np" || h.endsWith(".devpulse.sangamkunwar.com.np"))  return true;
    if (h === "devpulse.com" || h.endsWith(".devpulse.com")) return true;
    if (new URLSearchParams(window.location.search).get("sw") === "off") return true;
    return false;
}

async function unregisterMatching() {
    if (!("serviceWorker" in navigator)) return;
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
        regs
          .filter((r) => r.active?.scriptURL.endsWith(SW_URL) || r.installing?.scriptURL.endsWith(SW_URL))
          .map((r) => r.unregister()),
          
    );
}

export async function registerPwa() {
    if (shouldSkip()) {
        await unregisterMatching();
        return;
    } catch (err) {
        console.warn("[pwa] SW registration failed", err);
    }
}