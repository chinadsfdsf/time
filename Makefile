


qr_pngS:=                        \
	docs/self.png                \
	docs/zftd_streamyard.png     \
	docs/zftd_mail.png           \
	docs/zftd_youtube.png

qrencodeH := qrencode    --level=high   --8bit --size=30
qrencodeL := qrencode    --level=lowest --8bit --size=30

all: $(qr_pngS)
	sed -i -e \
		"/aaabbbccc01/ s;aaabbbccc01.*$$;aaabbbccc01\" href=\"`cat zftd_streamyard.txt|head -n 1`\">`cat zftd_streamyard.txt|head -n 1`</a></div>;g"  \
		docs/index.html

self_link:=https://time.chinadsf.org/
docs/self.png : self_png.txt
	$(qrencodeH)    `cat $<` -o $@
	convert \
		$@ \
		-resize 150x150 \
		ppm:- | pnmdepth 1 | pnmtopng > \
		$@.150x150.forYoutube.png
	convert \
		$@ \
		-resize 384x384 \
		ppm:- | pnmdepth 1 | pnmtopng > \
		$@.288x288.forYoutube.png
	convert \
		$@.288x288.forYoutube.png \
		-crop 341x384+21+0 \
		ppm:- | pnmdepth 1 | pnmtopng > \
		$@.512x576.forYoutube.png 
	montage -tile 6x -borderwidth 0 -geometry +0+0 \
		$@.512x576.forYoutube.png $@.512x576.forYoutube.png $@.512x576.forYoutube.png  \
		$@.512x576.forYoutube.png $@.512x576.forYoutube.png $@.512x576.forYoutube.png  \
		$@.512x576.forYoutube.png $@.512x576.forYoutube.png $@.512x576.forYoutube.png  \
		$@.512x576.forYoutube.png $@.512x576.forYoutube.png $@.512x576.forYoutube.png  \
		$@.512x576.forYoutube.png $@.512x576.forYoutube.png $@.512x576.forYoutube.png  \
		$@.512x576.forYoutube.png $@.512x576.forYoutube.png $@.512x576.forYoutube.png  \
		-resize 2048 \
		-crop 2048x1152 \
		ppm:- | pnmdepth 1 | pnmtopng > \
		$@.2048x1152.forYoutube.png 
	$(qrencodeL)    `cat $<` -o $@.L.png
	convert \
		$@.L.png \
		-resize 170x170 \
		-crop   150x150+10+10 \
		ppm:- | pnmdepth 1 | pnmtopng > \
		$@.150x150.forYoutube.L.png
	convert \
		$@.L.png \
		-resize 340x340 \
		-crop   300x300+20+20 \
		ppm:- | pnmdepth 1 | pnmtopng > \
		$@.300x300.forYoutube.L.png
		

docs/zftd_youtube.png : zftd_youtube.txt
	$(qrencodeH)    `cat $<` -o $@

docs/zftd_mail.png : zftd_mail.txt
	$(qrencodeH)    `cat $<` -o $@

docs/zftd_streamyard.png : zftd_streamyard.txt
	$(qrencodeH)    `cat $<` -o $@


s2 :
	cd docs/ && python3 -m http.server 33221

gs:
	nice -n 17 git status

gc:
	nice -n 17 git commit -a

up:
	pwd
	nice -n 17 git push -u origin master


gcXmmm:=$(shell (LC_ALL=C date +"%Y%m%d_%H%M%p" ; cat /etc/timezone )|tr "/\r\n-" _)
gcX:
	nice -n 17 git commit -m $(gcXmmm)


ga :
	nice -n 17 git add .

m:
	vim Makefile

X: ga gcX up

