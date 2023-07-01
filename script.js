		// Słownik zawierający nazwy części i ich ceny
		var cennik = {
            'brak': 0,
            'ECU_V1': 5250,
            'ECU_V2': 9000,
            'ECU_V3': 15000,
			'ECU_V4': 20000,
            'Turbo_V1': 7500,
            'Turbo_V2': 12500,
            'Turbo_V3': 20000,
            'Turbo_V4': 25000,
			'Turbo_V5': 30000,
            'LPG_25L': 20000,
            'LPG_50L': 25000,
            'LPG_75L': 35000,
            'Zestaw.U': 25000,
            'Zestaw.W': 50000,
            'Zestaw.D': 75000,
            'Zestaw.T': 125000,
            'C.F.I_V1': 62500,
            'C.F.I_V2': 75000,
            'C.F.I_V3': 87500,
            'C.F.I_V4': 112500,
            'C.F.I_V5': 125000,
            'RWD': 30000,
            'AWD': 50000,
            'FWD': 20000,
            'MZN': 37500,
            'Bak_100L': 45000,
            'Bak_125L': 55000,
            'Bak_150L': 65000,
            'Radio': 250,
            'CB': 750,
            'Ogranicznik': 1000,
            'Wykrywacz_Fotoradarów': 1250,
            'ABS': 7500,
            'GZ': 16250,
            'Hydra': 22500,
            's1000': 3500,
            's1001': 4500,
            's1002': 3000,
            's1003': 5000,
            's1014': 2700,
            's1015': 2000,
            's1016': 2000,
            's1023': 4250,
            's1049': 2000,
            's1050': 1600,
            's1058': 1900,
            's1060': 2750,
            's1138': 4350,
            's1139': 4750,
            's1146': 3900,
            's1147': 3750,
            's1158': 3000,
            's1162': 2800,
            's1163': 5750,
            'p1007': 1050,
            'p1026': 1100,
            'p1030': 1250,
            'p1036': 1600,
            'p1039': 1800,
            'p1042': 800,
            'p1047': 1350,
            'p1048': 1150,
            'p1056': 1050,
            'p1057': 900,
            'p1069': 1550,
            'p1090': 1350,
            'p1093': 1200,
            'p1101': 1600,
            'p1102': 1150,
            'p1106': 1250,
            'p1107': 1050,
            'p1118': 1400,
            'p1119': 1650,
            'p1134': 750,
            'w1018': 600,
            'w1019': 400,
            'w1020': 300,
            'w1021': 200,
            'w1022': 100,
            'w1028': 700,
            'w1029': 550,
            'w1034': 800,
            'w1037': 700,
            'w1043': 450,
            'w1044': 200,
            'w1045': 450,
            'w1046': 350,
            'w1059': 450,
            'w1064': 375,
            'w1065': 450,
            'w1066': 650,
            'w1089': 750,
            'w1092': 600,
            'w1104': 1400,
            'w1105': 1600,
            'w1113': 1150,
            'w1114': 2050,
            'w1126': 1150,
            'w1127': 1250,
            'w1129': 1400,
            'w1132': 1700,
            'w1135': 1000,
            'w1136': 1250,
            'zt1140': 1900,
            'zt1141': 1550,
            'zt1148': 1850,
            'zt1149': 1450,
            'zt1151': 950,
            'zt1154': 800,
            'zt1156': 1450,
            'zt1159': 900,
            'zt1161': 1450,
            'zt1167': 1400,
            'zt1168': 850,
            'zt1178': 1400,
            'zt1180': 1900,
            'zt1183': 1650,
            'zt1184': 1550,
            'zt1186': 2200,
            'zt1187': 2000,
            'zt1193': 1300,
            'zp1117': 1400,
            'zp1152': 1450,
            'zp1153': 1900,
            'zp1155': 2150,
            'zp1157': 1550,
            'zp1160': 1950,
            'zp1165': 1750,
            'zp1166': 2350,
            'zp1169': 2750,
            'zp1170': 1750,
            'zp1171': 2750,
            'zp1172': 1750,
            'zp1173': 1050,
            'zp1179': 1900,
            'zp1181': 1550,
            'zp1182': 1650,
            'zp1188': 1900,
            'zp1189': 2050,
            'zp1190': 900,
            'zp1191': 1000,
            'd1006': 450,
            'd1032': 900,
            'd1033': 1300,
            'd1035': 1150,
            'd1053': 900,
            'd1054': 550,
            'd1055': 600,
            'd1061': 750,
            'd1067': 700,
            'd1068': 1100,
            'd1088': 650,
            'd1091': 950,
            'd1128': 3500,
            'd1131': 0,
            'm1011': 1950,
            'm1012': 2100,
            'm1142': 1750,
            'm1144': 1600,
            'lt1109': 900,
            'lt1110': 750,
            'lp1115': 1400,
            'lp1116': 1750,
            'r1013': 250,
            'r1024': 250,
            'went1004': 2100,
            'went1005': 1900,
            'rejka': 12000,
            'szyby10': 25000,
            'szyby20': 30000,
            'szyby30': 35000,
            'szyby40': 40000,
            'szyby50': 45000,
            'szyby60': 50000,
            'szyby70': 55000,
            'szyby80': 60000,
            'szyby90': 65000,
            'szyby100': 70000,
            'apka1': 15000,
            'apka2': 15000,
            'modguma-standard': 0,
            'modguma-teren': 5000,
            'modguma-drift': 8000,
            'modguma-sport': 10000,
            'rozmiarfela-standard': 0,
            'rozmiarfela-bmale': 10000,
            'rozmiarfela-male': 12500,
            'rozmiarfela-duze': 22500,
            'poszprz1': 8000,
            'poszprz2': 15000,
            'posztyl1': 10000,
            'posztyl2': 18000,
		};

		// Funkcja obliczająca łączną cenę pojazdu
        function obliczCene(cena_pojazdu) {
    var wybrane_czesci = [];
    var ecu_radios = document.getElementsByName('czesci_ecu');
    var turbo_radios = document.getElementsByName('czesci_turbo');
    var lpg_radios = document.getElementsByName('czesci_lpg');
    var zestaw_radios = document.getElementsByName('czesci_zestaw');
    var cfi_radios = document.getElementsByName('czesci_cfi');
    var naped_radios = document.getElementsByName('czesci_naped');
    var bak_radios = document.getElementsByName('czesci_bak');
    var pozostale_radios = document.getElementsByName('czesci_pozostale');
    var spoilery_radios = document.getElementsByName('czesci_spoilery');
    var progi_radios = document.getElementsByName('czesci_progi');
    var wydechy_radios = document.getElementsByName('czesci_wydechy');
    var zderzaktyl_radios = document.getElementsByName('czesci_zderzaktyl');
    var zderzakprzod_radios = document.getElementsByName('czesci_zderzakprzod');
    var dach_radios = document.getElementsByName('czesci_dach');
    var maska_radios = document.getElementsByName('czesci_maska');
    var lampytyl_radios = document.getElementsByName('czesci_lampytyl');
    var lampyprzod_radios = document.getElementsByName('czesci_lampyprzod');
    var reflektory_radios = document.getElementsByName('czesci_reflektory');
    var wenty_radios = document.getElementsByName('czesci_wenty');
    var klucz_radios = document.getElementsByName('czesci_klucz');
    var rejka_radios = document.getElementsByName('czesci_rejka');
    var silnik_radios = document.getElementsByName('czesci_silnik');
    var szyby_radios = document.getElementsByName('czesci_szyby');
    var apka_radios = document.getElementsByName('czesci_apka');
    var licznik_radios = document.getElementsByName('czesci_licznik');
    var swiatla_radios = document.getElementsByName('czesci_swiatla');
    var modguma_radios = document.getElementsByName('czesci_modguma');
    var typguma_radios = document.getElementsByName('czesci_typguma');
    var rozmiarfela_radios = document.getElementsByName('czesci_rozmiarfela');
    var poszprz_radios = document.getElementsByName('czesci_poszprz');
    var posztyl_radios = document.getElementsByName('czesci_posztyl');
    // Sprawdzenie, który radio button został wybrany w kategorii ECU
    for (var i = 0; i < ecu_radios.length; i++) {
        if (ecu_radios[i].checked) {
            wybrane_czesci.push(ecu_radios[i].value);
            break;
        }
    }
    
    // Sprawdzenie, który radio button został wybrany w kategorii Turbo
    for (var i = 0; i < turbo_radios.length; i++) {
        if (turbo_radios[i].checked) {
            wybrane_czesci.push(turbo_radios[i].value);
            break;
				}
			}
    // Sprawdzenie, który radio button został wybrany w kategorii LPG
    for (var i = 0; i < lpg_radios.length; i++) {
        if (lpg_radios[i].checked) {
            wybrane_czesci.push(lpg_radios[i].value);
            break;
				}
			}
                // Sprawdzenie, który radio button został wybrany w kategorii Zestawy
    for (var i = 0; i < zestaw_radios.length; i++) {
        if (zestaw_radios[i].checked) {
            wybrane_czesci.push(zestaw_radios[i].value);
            break;
				}
			}
                // Sprawdzenie, który radio button został wybrany w kategorii C.F.I
                for (var i = 0; i < cfi_radios.length; i++) {
        if (cfi_radios[i].checked) {
            wybrane_czesci.push(cfi_radios[i].value);
            break;
				}
			}
                // Sprawdzenie, który radio button został wybrany w kategorii Napęd
                for (var i = 0; i < naped_radios.length; i++) {
                    if (naped_radios[i].checked) {
                        wybrane_czesci.push(naped_radios[i].value);
                        break;
                            }
                        }
                // Sprawdzenie, który radio button został wybrany w kategorii Bak
                for (var i = 0; i < bak_radios.length; i++) {
                    if (bak_radios[i].checked) {
                        wybrane_czesci.push(bak_radios[i].value);
                        break;
                            }
                        }
                            // Sprawdzenie, który radio button został wybrany w kategorii Pozostałe
                            for (var i = 0; i < pozostale_radios.length; i++) {
        if (pozostale_radios[i].checked) {
            wybrane_czesci.push(pozostale_radios[i].value);
            break;
				}
			}
                                        // Sprawdzenie, który radio button został wybrany w kategorii Spoilery
                                        for (var i = 0; i < spoilery_radios.length; i++) {
        if (spoilery_radios[i].checked) {
            wybrane_czesci.push(spoilery_radios[i].value);
            break;
				}
			}
                                       // Sprawdzenie, który radio button został wybrany w kategorii Progi
                                       for (var i = 0; i < progi_radios.length; i++) {
        if (progi_radios[i].checked) {
            wybrane_czesci.push(progi_radios[i].value);
            break;
				}
			}
                                       // Sprawdzenie, który radio button został wybrany w kategorii Wydechy
                                       for (var i = 0; i < wydechy_radios.length; i++) {
                                        if (wydechy_radios[i].checked) {
                                            wybrane_czesci.push(wydechy_radios[i].value);
                                            break;
                                                }
                                            }
                                       // Sprawdzenie, który radio button został wybrany w kategorii Tylny zderzak
                                       for (var i = 0; i < zderzaktyl_radios.length; i++) {
                                        if (zderzaktyl_radios[i].checked) {
                                            wybrane_czesci.push(zderzaktyl_radios[i].value);
                                            break;
                                                }
                                            }
                                       // Sprawdzenie, który radio button został wybrany w kategorii Przedni zderzak
                                       for (var i = 0; i < zderzakprzod_radios.length; i++) {
                                        if (zderzakprzod_radios[i].checked) {
                                            wybrane_czesci.push(zderzakprzod_radios[i].value);
                                            break;
                                                }
                                            }
                                        // Sprawdzenie, który radio button został wybrany w kategorii Dach
                                        for (var i = 0; i < dach_radios.length; i++) {
                                            if (dach_radios[i].checked) {
                                                wybrane_czesci.push(dach_radios[i].value);
                                                break;
                                                    }
                                                }                                           
                                        // Sprawdzenie, który radio button został wybrany w kategorii Maska
                                        for (var i = 0; i < maska_radios.length; i++) {
                                            if (maska_radios[i].checked) {
                                                wybrane_czesci.push(maska_radios[i].value);
                                                break;
                                                    }
                                                }           
                                        // Sprawdzenie, który radio button został wybrany w kategorii Tylnie lampy
                                        for (var i = 0; i < lampytyl_radios.length; i++) {
                                            if (lampytyl_radios[i].checked) {
                                                wybrane_czesci.push(lampytyl_radios[i].value);
                                                break;
                                                    }
                                                }       
                                        // Sprawdzenie, który radio button został wybrany w kategorii Przednie lampy
                                        for (var i = 0; i < lampyprzod_radios.length; i++) {
                                            if (lampyprzod_radios[i].checked) {
                                                wybrane_czesci.push(lampyprzod_radios[i].value);
                                                break;
                                                    }
                                                }      
                                        // Sprawdzenie, który radio button został wybrany w kategorii Reflektory
                                        for (var i = 0; i < reflektory_radios.length; i++) {
                                            if (reflektory_radios[i].checked) {
                                                wybrane_czesci.push(reflektory_radios[i].value);
                                                break;
                                                    }
                                                }      
                                        // Sprawdzenie, który radio button został wybrany w kategorii Wenty
                                        for (var i = 0; i < wenty_radios.length; i++) {
                                            if (wenty_radios[i].checked) {
                                                wybrane_czesci.push(wenty_radios[i].value);
                                                break;
                                                    }
                                                }      
         // Sprawdzenie, który radio button został wybrany w kategorii klucz
         for (var i = 0; i < klucz_radios.length; i++) {
            if (klucz_radios[i].checked) {
                wybrane_czesci.push(klucz_radios[i].value);
                break;
                    }
                }      
    // Sprawdzenie, który radio button został wybrany w kategorii rejka
    for (var i = 0; i < rejka_radios.length; i++) {
        if (rejka_radios[i].checked) {
            wybrane_czesci.push(rejka_radios[i].value);
            break;
                }
            }    
                
            
            
            
            // Sprawdzenie, który radio button został wybrany w kategorii silnik
         for (var i = 0; i < silnik_radios.length; i++) {
            if (silnik_radios[i].checked) {
                wybrane_czesci.push(silnik_radios[i].value);
                break;
                    }
                }    
                    // Sprawdzenie, który radio button został wybrany w kategorii szyby
         for (var i = 0; i < szyby_radios.length; i++) {
            if (szyby_radios[i].checked) {
                wybrane_czesci.push(szyby_radios[i].value);
                break;
                    }
                }    
                    // Sprawdzenie, który radio button został wybrany w kategorii apka
         for (var i = 0; i < apka_radios.length; i++) {
            if (apka_radios[i].checked) {
                wybrane_czesci.push(apka_radios[i].value);
                break;
                    }
                }    
                    // Sprawdzenie, który radio button został wybrany w kategorii licznik
         for (var i = 0; i < licznik_radios.length; i++) {
            if (licznik_radios[i].checked) {
                wybrane_czesci.push(licznik_radios[i].value);
                break;
                    }
                }   
                              // Sprawdzenie, który radio button został wybrany w kategorii swiatla
         for (var i = 0; i < swiatla_radios.length; i++) {
            if (swiatla_radios[i].checked) {
                wybrane_czesci.push(swiatla_radios[i].value);
                break;
                    }
                }  



                                           // Sprawdzenie, który radio button został wybrany w kategorii modguma
         for (var i = 0; i < modguma_radios.length; i++) {
            if (modguma_radios[i].checked) {
                wybrane_czesci.push(modguma_radios[i].value);
                break;
                    }
                }  
                                           // Sprawdzenie, który radio button został wybrany w kategorii typguma
         for (var i = 0; i < typguma_radios.length; i++) {
            if (typguma_radios[i].checked) {
                wybrane_czesci.push(typguma_radios[i].value);
                break;
                    }
                }  
                                           // Sprawdzenie, który radio button został wybrany w kategorii rozmiarfela
         for (var i = 0; i < rozmiarfela_radios.length; i++) {
            if (rozmiarfela_radios[i].checked) {
                wybrane_czesci.push(rozmiarfela_radios[i].value);
                break;
                    }
                }  
                                           // Sprawdzenie, który radio button został wybrany w kategorii  poszprz
         for (var i = 0; i < poszprz_radios.length; i++) {
            if (poszprz_radios[i].checked) {
                wybrane_czesci.push(poszprz_radios[i].value);
                break;
                    }
                }  
                                           // Sprawdzenie, który radio button został wybrany w kategorii posztyl
         for (var i = 0; i < posztyl_radios.length; i++) {
            if (posztyl_radios[i].checked) {
                wybrane_czesci.push(posztyl_radios[i].value);
                break;
                    }
                }  


            // Kalkulator
			var lacznacena = 0;
			for (var j = 0; j < wybrane_czesci.length; j++) {
				lacznacena += cennik[wybrane_czesci[j]];
			}
			lacznacena += parseFloat(cena_pojazdu);
			document.getElementById('cena').innerHTML = lacznacena + ' $';
            
		}