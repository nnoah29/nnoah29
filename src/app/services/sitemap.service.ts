import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

export interface SitemapUrl {
    loc: string;
    lastmod: string;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
}

@Injectable({
    providedIn: 'root'
})
export class SitemapService {
    private baseUrl = 'https://votre-domaine.com'; // Remplacez par votre domaine

    // Définir vos pages/sections avec leurs métadonnées
    private pages: SitemapUrl[] = [
        { loc: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 1.0 },
        { loc: '/#about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: '/#services', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: '/#portfolio', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
        { loc: '/#testimonials', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
        { loc: '/#blog', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 0.8 },
        { loc: '/#contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'yearly', priority: 0.6 },
    ];

    constructor(private router: Router) {}

    /**
     * Génère le XML du sitemap
     */
    generateSitemapXml(): string {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        for (const page of this.pages) {
            xml += '  <url>\n';
            xml += `    <loc>${this.baseUrl}${page.loc}</loc>\n`;
            xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
            xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
            xml += `    <priority>${page.priority}</priority>\n`;
            xml += '  </url>\n';
        }

        xml += '</urlset>';
        return xml;
    }

    /**
     * Ajoute dynamiquement une URL au sitemap
     */
    addUrl(url: SitemapUrl): void {
        const exists = this.pages.find(p => p.loc === url.loc);
        if (!exists) {
            this.pages.push(url);
        }
    }

    /**
     * Récupère toutes les URLs du sitemap
     */
    getUrls(): SitemapUrl[] {
        return this.pages;
    }

    /**
     * Met à jour le baseUrl
     */
    setBaseUrl(url: string): void {
        this.baseUrl = url;
    }
}