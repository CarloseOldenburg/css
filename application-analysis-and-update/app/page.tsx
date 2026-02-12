"use client"

import { useState, useMemo, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Copy, Check, Palette, ShoppingBag, Tag, CreditCard, AlertTriangle, ExternalLink } from "lucide-react"
import { TotemPreview } from "@/components/totem-preview"
import { CSS_BASE_TEMPLATE } from "@/lib/css-base-template"

const variableDefinitions = [
  {
    name: "--primary-color",
    label: "Cor Principal",
    defaultValue: "#000000",
    description: "Cor principal do tema",
    icon: Palette,
  },
  {
    name: "--lateral-bar-color",
    label: "Cor das Categorias",
    defaultValue: "#ED7A04",
    description: "Cor de fundo da barra lateral de categorias",
    icon: Tag,
  },
  {
    name: "--primary-auxiliary-color",
    label: "Cor Auxiliar Principal",
    defaultValue: "#ffffff",
    description: "Cor auxiliar principal (nao alterar)",
    icon: Palette,
  },
  {
    name: "--secondary-color",
    label: "Cor Secundaria",
    defaultValue: "#ff1414",
    description: "Cor secundaria do tema (nao alterar)",
    icon: Palette,
  },
  {
    name: "--category-menu-list-font-var",
    label: "Fonte das Categorias",
    defaultValue: "#ffffff",
    description: "Cor da fonte na categoria",
    icon: Tag,
  },
  {
    name: "--category-menu-list-selected-bg-var",
    label: "Categoria Selecionada",
    defaultValue: "#ffffff",
    description: "Cor de fundo da categoria selecionada",
    icon: Tag,
  },
  {
    name: "--secondary-auxiliary-color",
    label: "Fonte Categoria Selecionada",
    defaultValue: "#000000",
    description: "Cor da fonte na categoria selecionada",
    icon: Tag,
  },
  {
    name: "--fidelity-bar-font-color",
    label: "Fonte Barra Fidelidade",
    defaultValue: "#ffffff",
    description: "Cor da fonte na Barra do fidelidade (nao alterar)",
    icon: CreditCard,
  },
  {
    name: "--fidelity-bar-bg-color",
    label: "Fundo Barra Fidelidade",
    defaultValue: "#ea1d2c",
    description: "Cor da Barra do fidelidade CRM (nao alterar)",
    icon: CreditCard,
  },
  {
    name: "--product-card-background-color",
    label: "Fundo dos Produtos",
    defaultValue: "#ffffff",
    description: "Cor do bloco dos itens",
    icon: ShoppingBag,
  },
]

export default function CSSGuarAIPage() {
  const [fileName, setFileName] = useState("tema-guarai.css")
  const [colorValues, setColorValues] = useState<Record<string, string>>(
    variableDefinitions.reduce(
      (acc, variable) => {
        acc[variable.name] = variable.defaultValue
        return acc
      },
      {} as Record<string, string>,
    ),
  )
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleColorChange = useCallback((variableName: string, value: string) => {
    setColorValues((prev) => ({
      ...prev,
      [variableName]: value,
    }))
  }, [])

  const modifiedCss = useMemo(() => {
    let css = CSS_BASE_TEMPLATE
    Object.entries(colorValues).forEach(([variableName, value]) => {
      // Match the variable with its value and comment
      const regex = new RegExp(
        `(${variableName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*)#[0-9a-fA-F]{3,6}(;\\s*/\\*.*?\\*/|;)`,
        "g",
      )
      css = css.replace(regex, `$1${value}$2`)
    })
    return css
  }, [colorValues])

  const isFormValid = useMemo(() => {
    const allFieldsFilled = variableDefinitions.every((variable) => colorValues[variable.name]?.trim() !== "")
    return allFieldsFilled && fileName.trim() !== ""
  }, [colorValues, fileName])

  const handleDownload = async () => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    const blob = new Blob([modifiedCss], { type: "text/css" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName.endsWith(".css") ? fileName : `${fileName}.css`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setIsGenerating(false)
  }

  const handleCopyCSS = useCallback(() => {
    navigator.clipboard.writeText(modifiedCss)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [modifiedCss])

  return (
    <div className="min-h-screen bg-background">
      {/* Deprecation Warning Banner */}
      <div className="bg-amber-500 text-neutral-900">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
            <AlertTriangle className="h-6 w-6 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-bold text-sm sm:text-base">
                Esta aplicacao esta desatualizada e pode apresentar problemas.
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                Nao realizamos mais manutencao nesta versao. Utilize a nova aplicacao para gerar seu CSS.
              </p>
            </div>
            <a
              href="https://app.guaraai.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-bold text-amber-400 shadow-lg transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 flex-shrink-0"
            >
              Ir para nova aplicacao
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="text-5xl">🦊</span>
            <div>
              <h1 className="text-3xl font-bold text-foreground">CSS - GuarAI</h1>
              <p className="text-sm text-muted-foreground">Personalize seu tema de totem com inteligência</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Customization Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Personalização de Cores
                </CardTitle>
                <CardDescription>Ajuste as cores do seu tema e veja as mudanças em tempo real</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="fileName" className="text-sm font-medium">
                    Nome do Arquivo
                  </Label>
                  <Input
                    id="fileName"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    placeholder="tema-guarai.css"
                    className="w-full"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleDownload}
                    disabled={!isFormValid || isGenerating}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {isGenerating ? "Gerando..." : "Baixar CSS"}
                  </Button>
                  <Button
                    onClick={handleCopyCSS}
                    disabled={!isFormValid}
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copiar CSS
                      </>
                    )}
                  </Button>
                </div>

                {/* Color Pickers Grid */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-semibold text-foreground">Variáveis de Cor</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {variableDefinitions.map((variable) => {
                      const Icon = variable.icon
                      return (
                        <div
                          key={variable.name}
                          className="flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Label htmlFor={variable.name} className="text-sm font-medium block mb-1">
                              {variable.label}
                            </Label>
                            <p className="text-xs text-muted-foreground">{variable.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              id={variable.name}
                              value={colorValues[variable.name]}
                              onChange={(e) => handleColorChange(variable.name, e.target.value)}
                              className="h-10 w-10 rounded cursor-pointer border-2 border-border"
                            />
                            <Input
                              type="text"
                              value={colorValues[variable.name]}
                              onChange={(e) => handleColorChange(variable.name, e.target.value)}
                              className="w-24 text-xs font-mono"
                              placeholder="#000000"
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Success Alert */}
                {isFormValid && (
                  <Alert className="bg-primary/10 border-primary">
                    <Check className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-sm text-foreground">
                      Tema pronto para download! Todas as cores foram configuradas.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🦊</span>
                  Preview do Totem
                </CardTitle>
                <CardDescription>Visualização em tempo real das suas personalizações</CardDescription>
              </CardHeader>
              <CardContent>
                <TotemPreview colors={colorValues} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🦊</span>
              <p className="text-sm text-muted-foreground">CSS - GuarAI © 2025 - Personalize com inteligência</p>
            </div>
            <p className="text-xs text-muted-foreground">Desenvolvido por Carlos Oldenburg</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
