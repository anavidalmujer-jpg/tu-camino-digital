<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Landing architecture
- Keep the single scrolling product landing on the index route, with ordered part definitions in a shared configuration module; this preserves the requested sequence while unfinished parts stay hidden.
- Keep product facts and purchase placements in the shared configuration and test their concrete rules; this prevents price and placement drift during later development.
- Use the original PDF's extracted project photograph through a Lovable Assets pointer; this shows the actual ebook projects without storing binary media in source.
- Keep post-hero educational content and bonus previews in focused components, with factual chapter definitions in a separate data module; this extends the landing without altering the approved hero.
