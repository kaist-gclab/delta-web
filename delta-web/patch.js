const fs = require('fs');

function patch(file, before, after) {
  const content = fs.readFileSync(file, 'utf8');
  const patched = content.split(before).join(after);
  fs.writeFileSync(file, patched, 'utf8');
}

patch(
  'node_modules/@blueprintjs/table/lib/esm/interactions/draggable.d.ts',
  `render(): boolean | {} | React.ReactChild | React.ReactPortal | null | undefined;`,
  `render(): boolean | React.ReactChild | React.ReactPortal | null | undefined;`,
);
