# Análisis documental y propuesta visual

## Alcance

Se revisaron los cuatro PDF completos de la carpeta `docs`. La web presenta las asesorías de Paulina Valencia Pérez y su enfoque del hemisferio sur. Se conserva el marco tradicional de los textos usando lenguaje claro y evitando promesas de resultados cuantificables.

## Síntesis de las fuentes

| Documento | Contenido central | Aplicación en el sitio |
| --- | --- | --- |
| `que es el feng shui.pdf` · 3 páginas | Origen taoísta, Qi, yin y yang, relación del hogar con la naturaleza y recorrido de las aspiraciones en el hemisferio sur | Página El Feng Shui, introducción y ocho aspiraciones |
| `En que consiste la asesoria.pdf` · 2 páginas | Nueve momentos de la asesoría basal: Bagua, rastreo del entorno, lectura de aspiraciones y entrada, Ming Gua, recomendaciones, talismanes y cierre; cinco asesorías complementarias | Catálogo agrupado en cuatro propuestas y proceso resumido |
| `ciclos agentes.pdf` · 2 páginas | Relaciones de nutrición y control entre agua, madera, fuego, tierra y metal, y correspondencia estacional | Explorador de agentes y secuencias interactivas de ambos ciclos |
| `tipsFengShui.pdf` · 3 páginas | Reglas generales y consejos para cocina, baños, dormitorios, arte, billetera y trabajo | Selección por ambientes: primeros pasos, dormitorio, cocina y baños, trabajo |

El extracto de los cinco agentes y parte del texto general citan «Feng Shui en el hemisferio Sur», de Sylvia Galleguillos. Se conserva la atribución junto al explorador.

## Decisiones editoriales

- La asesoría basal es el punto de partida. El cambio de año energético se realiza una vez al año desde agosto. Bazhai se plantea desde tres meses después de la basal; estrellas volantes después de un año y considera el año de construcción.
- Las ocho aspiraciones están enumeradas de manera incompleta en algunos pasajes de los PDF. El desarrollo por orientaciones sí describe ocho áreas, incluyendo trabajo/esfuerzo en el sur. El sitio presenta salud y familia, prosperidad, reconocimiento, amor y relaciones, futuro y proyectos, comunicaciones, trabajo y camino, y sabiduría. No se muestran porcentajes de prosperidad como resultados verificables.
- Se sintetizan los nueve puntos de la basal en cuatro etapas sin inventar entregables, visitas, duraciones ni informes escritos.
- La guía selecciona recomendaciones prácticas de cuidado, orden y decoración. No reproduce todas las reglas de billetera o los rituales de los PDF.
- La formación, nombre y contacto proceden de las cabeceras. El número se normaliza como `+56 9 9090 9209`, coincidente con `+569 90909209` en la guía de consejos.
- No están definidos modalidad, cobertura geográfica, precios, duración ni políticas comerciales. Se invita a conversar esos datos directamente con Paulina.
- No se presentan el Feng Shui o sus interpretaciones energéticas como una disciplina científica demostrada ni se prometen mejoras de salud o ganancias económicas.

## Opciones visuales investigadas

### 1. Minimalismo cálido · elegida

Referencias: [Soft Minimal, Norm Architects](https://normcph.com/project/soft-minimal-2/) y [Studioilse](https://www.studioilse.com/).

La referencia de Norm pone el uso humano, los materiales y el bienestar en el centro. Studioilse presenta entornos que responden a las necesidades de sus habitantes. Se toman estas ideas como orientación propia: espacio en blanco, luz cálida, materiales naturales y jerarquía editorial. No se copian sus imágenes ni composiciones.

**Ventaja para este proyecto:** transmite calma y profesionalismo, da protagonismo al hogar y facilita combinar la explicación tradicional con una presentación contemporánea.

### 2. Editorial arquitectónico

Referencia: [proyectos de Norm Architects](https://normcph.com/project_category/architecture/). Fondo claro, tipografía más contenida, líneas finas y fotografías de mayor escala.

**Aplicación posible:** una identidad orientada al diseño del espacio y la formación de constructora civil. Requiere más fotografías propias para desarrollar un portafolio real.

### 3. Natural y cercano

Referencia conceptual: [What we do, Studioilse](https://www.studioilse.com/what-we-do/). Más presencia de vegetación, tonos tierra y escenas cotidianas.

**Aplicación posible:** comunicación más personal. Sería apropiada al disponer de un retrato autorizado de Paulina y fotografías de su trabajo.

## Sistema visual provisional

| Uso | Valor |
| --- | --- |
| Fondo marfil | `#F8F7F2` |
| Fondo cálido | `#EEECE3` |
| Texto principal | `#30372E` |
| Texto secundario | `#6E7367` |
| Verde oliva | `#4E5C43` |
| Verde oscuro | `#35422E` |
| Bordes | `#DDDFD3` |

Titulares serif con cursivas en verde; texto de interfaz sans serif. El símbolo combina un círculo, líneas de viento/agua y un sol. La marca usa el nombre real de Paulina y la descripción «Feng Shui & Armonía». Es una propuesta inicial editable, no una identidad comercial previamente aprobada.

La página principal combina una portada dividida, imagen con esquina curva, franja de principios, asesorías, recorrido, consejos con pestañas, preguntas frecuentes y contacto. Las páginas interiores amplían el contenido sin convertir la portada en un documento largo.

## Imagen ambiental

Generada con la herramienta integrada de imágenes. No representa una asesoría realizada ni una vivienda de un cliente. Archivo optimizado utilizado: `public/images/hogar-en-equilibrio.webp`. El original se conserva en `public/images/hogar-en-equilibrio.png`.

Prompt utilizado:

> Use case: photorealistic-natural. Asset type: editorial website hero photograph for a sober modern Chilean Feng Shui consultancy. Create one beautiful realistic architectural interior photograph in landscape 3:2 composition. A serene warm minimalist living room with ivory limewash walls, a low oatmeal linen sofa positioned on the right, a sculptural warm brown wooden coffee table, a large leafy green indoor tree by a tall window on the left, sheer linen curtains, a rounded ceramic vase and natural woven rug. Natural late afternoon light entering from the left, subtle deep olive accents, tactile natural wood, soft shadows, calm spacious atmosphere. Premium interiors magazine photography, human scale and lived-in, not sterile. Scene should fill entire image, no borders. No people, no text, no logos, no watermark. Architectural perspective straight and realistic, understated elegance. This is an illustrative imagined interior, not a portfolio project.

## Accesibilidad e interacciones

Navegación con estado de página actual, salto al contenido, foco visible, menú móvil, pestañas con flechas/Home/End y paneles asociados, preguntas con desplegables nativos, imágenes con texto alternativo y diálogo de contacto nativo con cierre por Escape. Se respeta la preferencia de movimiento reducido.

La navegación y el contenido principal se renderizan desde el servidor. Las pestañas y el diálogo son islas interactivas. No hay formularios que simulen envíos, reservas ficticias ni botones que aparenten cobrar.
